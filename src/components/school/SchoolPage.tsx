import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Vision } from "./Vision";
import { WhyChooseUs } from "./WhyChooseUs";
import { Academics } from "./Academics";
import { Facilities } from "./Facilities";
import { StudentLife } from "./StudentLife";
import { Gallery } from "./Gallery";
import { Highlights } from "./Highlights";
import { PrincipalMessage } from "./PrincipalMessage";
import { CTA } from "./CTA";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
export function SchoolPage() { return <div className="overflow-x-hidden"><Navbar /><main><Hero /><About /><Vision /><WhyChooseUs /><Academics /><Facilities /><StudentLife /><Gallery /><Highlights /><PrincipalMessage /><CTA /><Contact /></main><Footer /></div>; }
