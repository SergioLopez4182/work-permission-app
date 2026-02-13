export default function Permissions() {
    return (
        <article className="flex flex-col w-full p-4 bg-blue-300">

            <header className="flex justify-between items-center bg-red-300">
                <section className="flex flex-col">
                    <div>Titulo</div>
                    <div>Subtitulo</div>
                </section>
                <section>
                    Acciones
                </section>
            </header>

            <main className="bg-green-300 flex flex-1">
                Contenido
            </main>

            <footer className="bg-yellow-300">
                Footer
            </footer>
        </article>
    );
}