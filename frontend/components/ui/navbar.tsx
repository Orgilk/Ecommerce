"use client";

import { signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Menu,
  X,
  ChevronDown,
  Heart,
  Package,
  ShoppingCart,
  LogOut,
  BrainCircuit,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRenderContext } from "@/contexts/RenderContext";
import Cookies from "js-cookie";
import { toast, Toaster } from "react-hot-toast";

const collections = {
  // "ШИНЭЭР ИРСЭН": {
  //   basePath: "/new-arrival",
  //   items: [
  //     { title: "", category: "Нэг удаагийн хэрэгсэл" },
  //     { title: "Захиалгат хэрэгсэл", category: "Захиалгат хэрэгсэл" },
  //     { title: "Solid Wear Clothing", category: "solid-wear-clothing" },
  //     { title: "Plus Size Suits", category: "plus-size" },
  //     { title: "Indian Sarees", category: "indian-sarees" },
  //     { title: "Bedsheets", category: "bedsheets" }
  //   ]
  // },
  "Нүүр хуудас": {
    basePath: "/",
    items: [
      { title: "Нүүр хуудас", category: "home", href: "/" },
      // { title: "Үйл ажиллагаа", category: "aboutus" },
    ],
  },
  Бүтээгдэхүүн: {
    basePath: "/bestsellers",
    items: [
      {
        title: "Эм",
        category: "Эм",
        href: "/aboutus",
      },
      { title: "Тариа", category: "Тариа", href: "/aboutus" },
      {
        title: "Нэг удаагийн хэрэгсэл",
        category: "Нэг удаагийн хэрэгсэл",
        href: "/aboutus",
      },
      {
        title: "Захиалгат хэрэгсэл",
        category: "Захиалгат хэрэгсэл",
        href: "/aboutus",
      },
    ],
  },
  "БИДНИЙ ТУХАЙ": {
    basePath: "/aboutus",
    items: [
      // { title: 'Бидний тухай', href: '/aboutus' },
      { title: "Бидний тухай", category: "aboutus", href: "/aboutus" },
    ],
  },
  // "Тариа": {
  //   basePath: "/ethnic-wear",
  //   items: [
  //     { title: "Эм", category: "Эм" },
  //     { title: "Тариа", category: "Тариа" },
  //     { title: "Indian Wear", category: "indian" },
  //     { title: "Western Wear", category: "western" },
  //     { title: "Festive Collection", category: "festive" },
  //     { title: "Traditional Sarees", category: "traditional-sarees" },
  //   ]
  // },
  // "ТариаНЭЛГИЙН ХЭРЭГСЭЛ": {
  //   basePath: "/fabrics",
  //   items: [
  //     { title: "Cotton", category: "cotton" },
  //     { title: "Silk", category: "silk" },
  //     { title: "Chiffon", category: "chiffon" },
  //     { title: "Georgette", category: "georgette" },
  //     { title: "Premium Fabrics", category: "premium" }
  //   ]
  // },
  // "Special Offers": {
  //   basePath: "/sale",
  //   items: [
  //     { title: "Clearance Sale", category: "clearance" },
  //     { title: "Season End", category: "season-end" },
  //     { title: "Bundle Deals", category: "bundles" },
  //     { title: "First Order Discount", category: "first-order" }
  //   ]
  // }
};

export function MainMenu({ isMobile = false, onLinkClick = () => {} }) {
  const [openCategory, setOpenCategory] = useState(null);
  const { triggerRender } = useRenderContext();
  const router = useRouter();

  const handleCategoryClick = (category: any) => {
    if (isMobile) {
      setOpenCategory(openCategory === category ? null : category);
    }
  };

  const handleLinkClick = (basePath: any, category: any) => {
    triggerRender();
    router.push(`${basePath}?category=${category}`);
    onLinkClick();
  };

  if (isMobile) {
    return (
      <div className="w-full space-y-1">
        {Object.entries(collections).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="border-b border-gray-100">
            {/* Skip submenu for 'Бидний ТУХАЙ' */}
            {categoryName === "Бүтээгдэхүүн" ? (
              <>
                <button
                  onClick={() => handleCategoryClick(categoryName)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {categoryName}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-500 transition-transform duration-200",
                      openCategory === categoryName && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openCategory === categoryName && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="space-y-1 px-4 py-2">
                        {categoryData.items.map((item) => (
                          <button
                            key={item.title}
                            onClick={() =>
                              handleLinkClick(
                                categoryData.basePath,
                                item.category
                              )
                            }
                            className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              // No submenu for "Бидний ТУХАЙ", so directly render its items
              <div className="space-y-1 px-4 py-2">
                {categoryData.items.map((item) => (
                  <button
                    key={item.title}
                    onClick={() =>
                      handleLinkClick(categoryData.basePath, item.category)
                    }
                    className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="flex space-x-4">
        {Object.entries(collections).map(([categoryName, categoryData]) => (
          <NavigationMenuItem key={categoryName}>
            {/* Skip submenu for 'Бидний ТУХАЙ' */}
            {categoryName === "Бүтээгдэхүүн" ? (
              <>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-slate-500 transition-colors">
                  {categoryName}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 lg:w-[650px] lg:grid-cols-2 bg-white shadow-lg rounded-lg">
                    {categoryData.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() =>
                              handleLinkClick(
                                categoryData.basePath,
                                item.category
                              )
                            }
                            className="block w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-red-700 text-left"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              // Directly render 'Бидний ТУХАЙ' items without submenu
              <div className="space-y-1 px-4 py-2">
                {categoryData.items.map((item) => (
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const { triggerRender } = useRenderContext();
  const userId = Cookies.get("userId");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("token");
        const isAuthed = !!token || !!session;
        setIsAuthenticated(isAuthed);

        if (isAuthed) {
          try {
            const response = await fetch(`/api/user/get/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });

            if (response.ok) {
              const userData = await response.json();
              setUsername(userData.data.username);
            } else {
              setUsername(
                session?.user?.name ||
                  session?.user?.email?.split("@")[0] ||
                  "Хэрэглэгч"
              );
            }
          } catch (error) {
            toast.error("Failed to fetch username!");
            setUsername(
              session?.user?.name ||
                session?.user?.email?.split("@")[0] ||
                "Хэрэглэгч"
            );
          }
        }
        setIsAuthChecked(true);
      } catch (error) {
        toast.error("Authentication failed!");
        setIsAuthenticated(false);
        setIsAuthChecked(true);
      }
    };
    checkAuth();
  }, [session, status, userId]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = async () => {
    triggerRender();
    try {
      await signOut({ redirect: false });
      Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
      setIsAuthenticated(false);
      setIsDropdownOpen(false);
      triggerRender();
      toast.success("logout successfully!");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("logout failed!");
    }
  };

  const AuthButton = () => {
    if (!isAuthChecked) return null;

    if (isAuthenticated) {
      return (
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            <User className="h-5 w-5" />
            <span className="hidden sm:inline capitalize truncate max-w-[100px]">
              {username}
            </span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-100">
                    <p className="font-medium capitalize">{username}</p>
                    {session?.user?.email && (
                      <p className="text-xs text-gray-500 truncate">
                        {session.user.email}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      triggerRender();
                      router.push("/whishlist");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Heart size={16} /> Wishlist
                  </button>
                  <button
                    onClick={() => {
                      router.push("/your-orders");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Package size={16} /> Миний захиалгууд
                  </button>
                  <button
                    onClick={() => {
                      triggerRender();
                      router.push("/updateprofile");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User size={16} /> Профайл
                  </button>
                  {/* <button
                    onClick={() => {
                      triggerRender();
                      router.push("/findproduct");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <BrainCircuit size={16} /> StyleSnap AI
                  </button> */}
                  <button
                    onClick={() => {
                      triggerRender();
                      router.push("/cart");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <ShoppingCart size={16} /> Карт
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut size={16} /> Гарах
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <button
        onClick={() => router.push("/login")}
        className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
      >
        <User className="h-5 w-5" />
        <span className="hidden sm:inline">Нэвтрэх</span>
      </button>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isDropdownOpen && !event.target.closest(".relative")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Company logo" className="h-16" />
          </Link>

          <div className="hidden lg:block flex-1 px-8">
            <MainMenu />
          </div>

          <div className="flex items-center gap-4">
            <AuthButton />

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="block lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 border-t border-gray-200"
          >
            <MainMenu isMobile onLinkClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
