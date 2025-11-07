import { NextResponse } from 'next/server';
import { products, Product } from '@/lib/data/products';

export type { Product };

export async function GET(request: Request) {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();
  // Add validation and product creation logic here
  return NextResponse.json({ message: 'Product created' });
}
