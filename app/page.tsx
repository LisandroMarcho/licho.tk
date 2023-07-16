import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import AddLink from "../components/AddLink";
import LinkList from "../components/LinkList";

function Home() {
  return (
    <section className="flex flex-col md:flex-row gap-6">
      <div className="w-1/2">
        <LinkList />
      </div>
      <div className="w-1/2">
        <SignedOut>
          <SignIn
            appearance={{
              elements: { logoBox: "h-10" },
              layout: {
                socialButtonsVariant: "blockButton",
              },
            }}
          />
        </SignedOut>
        <SignedIn>
          <AddLink />
        </SignedIn>
      </div>
    </section>
  );
}

export default Home;
