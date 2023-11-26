import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-6xl relative w-fit">
        No existe ese <span className="text-accent">short</span>
      </h2>
      <p className="text-3xl w-fit border-b-2 border-b-secondary my-4">
        La url indicada no existe
      </p>
      <Link href={"/"} className="px-4 py-2 bg-primary hover:bg-accent">
        Volver a Inicio 🏠
      </Link>
    </div>
  );
}
