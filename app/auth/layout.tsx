export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex-1 flex items-center justify-center">
            {children}
        </section>
    );
}