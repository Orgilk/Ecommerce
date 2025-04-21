import { NextResponse } from "next/server";
import Order from "@/models/Order";
import Product from "@/models/Product";
import connectToDatabase from "@/lib/dbConnect";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId) {
    return NextResponse.json(
      { success: false, error: "Login Needed" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const orders = await Order.find({ userId: userId });

    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { success: false, error: "No Orders Found" },
        { status: 400 }
      );
    }

    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const detailedProducts = await Promise.all(
          order.products.map(async (productId: string) => {
            const productDetails = await Product.findById(productId);
            return productDetails || { id: productId, error: "Not Found" };
          })
        );
        return { ...order._doc, products: detailedProducts };
      })
    );

    return NextResponse.json(
      { success: true, data: enrichedOrders },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
