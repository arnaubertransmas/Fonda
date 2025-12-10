"use client";
import Header from "@/components/header";
import React from "react";
import Footer from "@/components/footer";
import Allotjament from "@/components/allotjament";

export default function AllotjamentPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Allotjament />
            <Footer />
        </div>
    )
}