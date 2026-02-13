import { ReactNode } from "react";

interface Props {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    content: ReactNode;
    footer?: ReactNode;
}

export default function DashboardLayout({
    title, subtitle, actions, content, footer
}: Props) {


    return (
        <article className="flex flex-col w-full p-8 gap-8">

            <header className="flex justify-between items-center">
                <section className="flex flex-col">
                    <div className="font-bold text-2xl">{title}</div>
                    <div className="font-medium text-xl text-gray-500">{subtitle}</div>
                </section>
                <section>
                    {actions}
                </section>
            </header>

            <main className="flex flex-1 overflow-scroll">
                {content}
            </main>

            <footer className="">
                {footer}
            </footer>
        </article>
    );
}
