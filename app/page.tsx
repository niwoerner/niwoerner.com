import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Intro } from "@/components/intro";
import { PostList } from "@/components/post-list";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Intro />
          <PostList limit={2} showViewAll />
        </Container>
      </main>
    </>
  );
}
