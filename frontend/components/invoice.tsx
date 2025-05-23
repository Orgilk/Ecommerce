"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePDF } from "react-to-pdf";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X, Download } from "lucide-react";
import Image from "next/image";

interface InvoiceItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceDetails {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  cgst: number;
  sgst: number;
  shipping: number;
  total: number;
  paymentTerms: string;
  notes: string;
}

interface CompanyDetails {
  name: string;
  address: string;
  gstin: string;
  email: string;
  phone: string;
  website: string;
}

interface InvoiceComponentProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceDetails: InvoiceDetails;
  companyDetails: CompanyDetails;
}

export default function EnhancedInvoiceComponent({
  isOpen,
  onClose,
  invoiceDetails,
  companyDetails,
}: InvoiceComponentProps) {
  const { toPDF, targetRef } = usePDF({
    filename: `invoice-${invoiceDetails.invoiceNumber}.pdf`,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl my-8"
          >
            <Card className="w-full">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Нэхэмжлэл</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="self-end sm:self-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh] sm:h-[70vh]">
                  <div ref={targetRef} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-8 space-y-4 sm:space-y-0">
                      <div>
                        <Image
                          src="/logo.png"
                          width={150}
                          height={50}
                          className="mb-2"
                        />
                        <p className="text-xs sm:text-sm text-gray-600">
                          Хаяг: Улаанбаатар хот, Баянгүл дүүрэг, xx-р хороо,
                          xx-р гудамж, xx-р байр 101 тоот
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Email: pharmacy1111@gmail.com
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Phone: +976 99998888
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Website: www.pharmacy.mn
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <h2 className="text-lg sm:text-xl font-bold">
                          Нэхэмжлэл #{invoiceDetails.invoiceNumber}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Захиалсан өдөр: {invoiceDetails.date}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Хүргэдэх өдөр: {invoiceDetails.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="mb-8">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        Төлөх хэрэглэгч:
                      </h3>
                      <p className="font-medium">
                        {invoiceDetails.customerName}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {invoiceDetails.customerEmail}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {invoiceDetails.customerPhone}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {invoiceDetails.customerAddress}
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[40%]">
                              Барааны нэр
                            </TableHead>
                            <TableHead className="text-right">
                              Тоо ширхэг
                            </TableHead>
                            <TableHead className="text-right">
                              Нэгж үнэ
                            </TableHead>
                            <TableHead className="text-right">
                              Нийт үнэ
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {invoiceDetails.items.map((item) => (
                            <TableRow key={item.productId}>
                              <TableCell className="font-medium">
                                {item.name}
                              </TableCell>
                              <TableCell className="text-right">
                                {item.quantity}
                              </TableCell>
                              <TableCell className="text-right">
                                ₮{parseFloat(item.price.toString()).toFixed(2)}
                              </TableCell>
                              <TableCell className="text-right">
                                ₮
                                {parseFloat(
                                  (item.quantity * item.price).toString()
                                ).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-8 flex justify-end mr-0 ">
                      <div className="w-full sm:w-1/2 text-center sm:text-center md:text-right space-y-1">
                        <p className="text-sm text-gray-600">
                          Барааны нийт үнэ: ₮
                          {parseFloat(
                            invoiceDetails?.subtotal.toString()
                          ).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">
                          Гаалын татвар (9%): ₮
                          {parseFloat(invoiceDetails?.cgst.toString()).toFixed(
                            2
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          НӨАТ (9%): ₮
                          {parseFloat(invoiceDetails?.sgst.toString()).toFixed(
                            2
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          Хүргэлт: ₮
                          {parseFloat(
                            invoiceDetails?.shipping.toString()
                          ).toFixed(2)}
                        </p>
                        <p className="text-lg sm:text-xl font-bold mt-2">
                          Нийт үнэ: ₮
                          {parseFloat(invoiceDetails?.total.toString()).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 border-t pt-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        Төлбөрийн журам:
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Төлбөрийг 5 хоногийн дотор төлнө
                      </p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        Тэмдэглэл:
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Худалдаж авсанд баярлалаа
                      </p>
                    </div>
                    <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
                      <p>
                        Энэ нэхэмжлжэл нь компьютерээр үүссэн тул гарын үсэн
                        шаардлагагүй.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={() => toPDF()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
