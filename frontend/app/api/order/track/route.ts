import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Order from '@/models/Order';
import User from '@/models/User';
import { Types } from 'mongoose';

export async function POST(req: Request) {
	const { email, orderId } = await req.json();
	if (!email || !orderId) {
		return NextResponse.json({ success: false, error: 'Email esvel orderId heregtei' }, { status: 400 });
	}
	try {
		await connectToDatabase();

		const user:any = await User.findOne({email:email});

		if(!user){
			return NextResponse.json({ success: false, error: 'User oldsongui' }, { status: 404 });
		}
		const orderDetails: any = await Order.findOne({ userId: user._id, _id: new Types.ObjectId(orderId) },{
			status:1,
			shippingDetails:1,
			_id:0
		});

		if (!orderDetails) {
			return NextResponse.json({ success: false, error: 'Order oldsongui' }, { status: 404 });
		}

		return NextResponse.json({ success: true, data: orderDetails }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'order status avahad aldaa garlaa' }, { status: 500 });
	}
}
