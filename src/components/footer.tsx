import { portfolio as p } from "@/data/portfolio";
import { Icon } from "./icon";
export function Footer() {
  return <footer className="site-footer shell"><span>{p.footer.copyright}</span><span>{p.footer.note}</span><a href="#top">{p.footer.top}<Icon name="arrow" /></a></footer>;
}
