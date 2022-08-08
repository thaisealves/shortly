--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "confirmPassword" text NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", url, "shortUrl", "visitCount", "createdAt") FROM stdin;
3	1	https://github.com	FBlVb	0	2022-08-07
1	1	https://www.youtube.com	nvjeS	2	2022-08-07
4	1	https://github.com	Ozgta	1	2022-08-07
9	2	https://www.notion.so/Projeto-Shortly-API-6e9ec3831928415e950b48890187682e	mlYvr	0	2022-08-08
10	2	https://www.notion.so/Projeto-Shortly-API-6e9ec3831928415e950b48890187682e	VInDE	1	2022-08-08
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "confirmPassword", "createdAt") FROM stdin;
1	João	joao@driven.com.br	$2b$10$9UcYH4ka74Wqk9i9GKU.nevHS4mj0BDn/WDSTr07WfGm7whxf8.AO	$2b$10$kqOTqC0ESjGq3sqsdeOhrOP76zpOKzu/lcgvo9ZThvrwecZs3rlaC	2022-08-06
2	thai	thai@driven.com.br	$2b$10$qPMGRd0MEv5cvxeC2bmqSesuUQByZyd6Wo1TDqae3DZwUdiAqqM8K	$2b$10$McVcN9A08gRexRT2gCt2vuhgvdyhuRyFYXY1WyGheZS05oX0eiynO	2022-08-07
3	hugo	hugo@driven.com.br	$2b$10$C07x/kW9ux.Xj.4PdkalVupsT.6cj3DsP6obDuJcD1wcCxtEMRnA6	$2b$10$CNqGB2iRgmTqkw3KF2rd7.diaIi5Lh8zlmpCsrsBmP3mIe5hqGj3K	2022-08-08
4	viny	viny@driven.com.br	$2b$10$D1aSLpC16Xc9x54Lepq4k.Qqvge6bE.jfJboISQGYgRKg14hDG2Ju	$2b$10$zULOTiGaSqlvvNbH/7KxwuFc73y80l2C0L1/uILgzF5DK9zXfJW4W	2022-08-08
5	julia	julia@driven.com.br	$2b$10$j2plWZUaV6ig7QGEy/wG5.0PV.x4XW5ezdB9PX4SMBzEludeTqM06	$2b$10$jO1weV1lxLx996wU9JvdqOC.hg7BT8g90zL7KcPl6j0P4CR2YJUIy	2022-08-08
6	tania	tania@driven.com.br	$2b$10$kvcQzXPaXkP9l2HHx2BrBugERI/1vd8yEHHskt8Qn/aGe3lfpiN.u	$2b$10$N/yG9ttemNOQtbnD.hFEXevV2wMROfUA4N.GyLbkWR.igni6B4Zne	2022-08-08
7	ruiter	ruiter@driven.com.br	$2b$10$8O1aEjpMYaEnGPcHSFTzPOyC1I56Ry80hTTLGkt5ksfKdf5MjdwQm	$2b$10$aNDvYVrUGH6rjkzbMqTPvevVIaSrN2Eaxpwz8t.NUG9SwYflA/Bwu	2022-08-08
8	thaise	thaise@driven.com.br	$2b$10$NHiGjM0S8XgsxNO6PlHF4.AmxqMZeWwvp0rqGaJqUqCAyFdfCSmVW	$2b$10$PWTIXRlqhJkfOIIqUKjxRehKCL4W5qfqxBYkLQVR6dn/fZF0ryaVm	2022-08-08
9	thaise	thaise@gmail.com.br	$2b$10$SbCjfuuoG5cZEaWd3TRx0.Ot2EwX8I0E0Sb.q.aTvsyDU24m4FurO	$2b$10$G0CFr3ZGixhi4VBwZB8kTOiI4.l8HuIa16S40lMEdiClZfhJc62ly	2022-08-08
10	hugo	hugo@gmail.com.br	$2b$10$3kWI4PSIzM9VX2Q0J/JWL..Oo2SqjMynMLGnhkvQV7ggLAWn0LWPi	$2b$10$ygjk79l9Cp/KVbEtL6srs.izieTiFT.wvLYoZQRVZh.HSMzdfmkp6	2022-08-08
11	viny	viny@gmail.com.br	$2b$10$X48JlYt55LRwc7QR.FtYju8DuvUTgj5nbYn/OJJNF1FCLnrnKpJ42	$2b$10$Wn1koe3EtDzybQcxRCV6wujfryrMByZ7YGNQZpi7OAD7xY0qrlYQO	2022-08-08
12	julia	julia@gmail.com.br	$2b$10$/FbzHaIr.wYOLyxfmoXjs..F/HfLdFqSL6Kd0brxU6oHUdNh/TllK	$2b$10$OzSgeIC2TQvZtRxjo3JjIONSa64yZ6nCwmxPjkR3MpF26dGKQi8cC	2022-08-08
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

