interface Props {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
    return (
        <main className="min-h-screen w-full bg-gray-200 dark:bg-neutral-900">
            {children}
        </main>
    );
}