import Navbar from "@/components/layouts/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            
            {children}
        </section>
    );
}