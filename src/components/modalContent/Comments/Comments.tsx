import { memo, useEffect, useState, useCallback, useRef } from "react";
import { Comment } from "./Comment/Comment";
import { Container, Title, Wrapper } from "./CommentsStyles";
import { createPortal } from "react-dom";
import { Loader } from "@common/Loader/Loader";
import { CommentType } from "@assets/types/types";
import { CommentsAPI } from "@api/api";

export const Comments = memo(() => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const requestComments = useCallback(
    async (page: number, pageSize: number) => {
      try {
        setIsLoading(true);
        const response = await CommentsAPI.getComments({ page, pageSize });
        if (response.data.comments.length > 0) {
          setComments((prevComments) => [
            ...prevComments,
            ...response.data.comments,
          ]);
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    requestComments(page, pageSize);
  }, [page, pageSize, requestComments]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        if (
          scrollTop + clientHeight >= scrollHeight - 5 &&
          hasMore &&
          !isLoading
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    const scrollContainer: HTMLDivElement | null = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading, hasMore]);

  return (
    <Container>
      <Title>Комментарии</Title>
      <Wrapper ref={scrollContainerRef}>
        {comments.map((el) => (
          <Comment key={el._id} data={el} />
        ))}
      </Wrapper>
      {createPortal(isLoading && <Loader />, document.body)}
    </Container>
  );
});
