"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  return (
    <div>
      <h2 className="font-bold text-xl">Product List</h2>
      <div className="py-8 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3x1 mx-auto">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
