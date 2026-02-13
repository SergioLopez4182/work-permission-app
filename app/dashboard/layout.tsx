import Navbar from "@/components/layouts/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col h-screen w-full overflow-hidden">
            <Navbar />

            <main className="flex flex-1 w-full overflow-hidden">
                {children}
            </main>
        </section>
    );
}