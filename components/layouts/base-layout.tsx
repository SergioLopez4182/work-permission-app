interface Props {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
    return (
        <main className="flex flex-col w-full min-h-screen bg-gray-300 dark:bg-neutral-900">
            {children}
        </main>
    );
}