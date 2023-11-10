CREATE TABLE IF NOT EXISTS public.articles
(
    id integer NOT NULL DEFAULT 0,
    title text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    course_id integer NOT NULL DEFAULT 0,
    chapter_id integer NOT NULL DEFAULT 0,
    chapter_source_id integer NOT NULL DEFAULT 0,
    raw_data json NOT NULL DEFAULT '{}'::json,
    ctime bigint DEFAULT 0,
    CONSTRAINT articles_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.chapters
(
    id integer NOT NULL DEFAULT 0,
    source_id integer NOT NULL DEFAULT 0,
    title character varying(50) COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    article_count integer NOT NULL DEFAULT 0,
    course_id integer,
    CONSTRAINT chapters_pkey PRIMARY KEY (source_id)
)

CREATE TABLE IF NOT EXISTS public.courses
(
    id integer NOT NULL DEFAULT 0,
    title character varying(50) COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    labels integer[],
    ctime bigint NOT NULL DEFAULT 0,
    utime bigint NOT NULL DEFAULT 0,
    raw_data json,
    CONSTRAINT courses_pkey PRIMARY KEY (id)
)
