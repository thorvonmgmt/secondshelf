export type BookCondition = 'Like New' | 'Excellent' | 'Good' | 'Fair';

export type BookCategory = 
  | 'Fiction'
  | 'Non-Fiction'
  | 'Academic'
  | 'Competitive Exams'
  | 'Business'
  | 'Finance'
  | 'Self-Help'
  | 'Science'
  | 'Engineering'
  | 'Literature'
  | "Children's Books";

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  booksSold: number;
  location: string;
  verified: boolean;
  memberSince: string;
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: BookCategory;
  condition: BookCondition;
  conditionNotes: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  coverImage: string;
  galleryImages: string[];
  seller: Seller;
  description: string;
  edition: string;
  publisher: string;
  language: string;
  isbn: string;
  year: number;
  pages: number;
  binding: 'Paperback' | 'Hardcover';
  featured?: boolean;
  isTradeEligible: boolean;
  tradeLookingFor?: string;
  tags?: string[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface TradeListing {
  id: string;
  ownerName: string;
  ownerLocation: string;
  ownerAvatar: string;
  ownerRating: number;
  offeringBook: Book;
  lookingFor: string[];
  preferredConditions: BookCondition[];
  acceptsCashAdjustment: boolean;
  listedDate: string;
}

export interface TradeProposal {
  id: string;
  senderName: string;
  offeredBook: Book;
  requestedBook: Book;
  cashAdjustment: number;
  message: string;
  status: 'Pending' | 'Accepted' | 'Declined' | 'Completed';
  createdAt: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingAddress: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
  deliveryMethod: 'standard' | 'express';
  paymentMethod: 'upi' | 'card' | 'cod';
  subtotal: number;
  shippingCost: number;
  total: number;
  createdAt: string;
  estimatedDelivery: string;
}
