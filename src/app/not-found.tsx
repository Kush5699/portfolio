import Link from "next/link";
import { portfolio as p } from "@/data/portfolio";
import { Icon } from "@/components/icon";
export default function NotFound() { return <main id="main" className="shell not-found"><p className="eyebrow">404 / Signal lost</p><h1>{p.notFound.title}</h1><p>{p.notFound.description}</p><Link href="/" className="button button-solid">{p.notFound.link}<Icon /></Link></main>; }
