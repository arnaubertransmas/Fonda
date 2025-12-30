"use client";
import Header from "@/components/header";
import React from "react";
import Footer from "@/components/footer";
import Portal from "@/components/portal_wikilok/blog";

export default function PortalPage() {
    return (
        <>
            <Header />
            <Portal />
            <Footer />
        </>
    )
}