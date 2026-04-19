"use client";
import Header from "@/components/header";
import React, { Suspense } from "react";
import Footer from "@/components/footer";
import Portal from "@/components/portal_wikilok/blog";

export default function PortalPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Carregant...</div>}>
                <Portal />
            </Suspense>
            <Footer />
        </>
    )
}