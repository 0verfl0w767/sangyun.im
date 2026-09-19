export const profile = {
  name: "김상윤",
  englishName: "KIM SANGYUN",
  role: "Backend / Infra Developer",
  email: "0verfl0w767@naver.com",
  secondaryEmail: "0verfl0w767@syu.kr",
  github: "https://github.com/0verfl0w767",
  blog: "https://velog.io/@0verfl0w767",
};

export const militaryService = {
  branch: "대한민국 해군",
  rank: "병장",
  status: "만기전역",
  period: "2024.04.15 — 2025.12.14",
  role: "전산장비정비병",
  duties: "컴퓨터·네트워크 유지보수",
};

export type ProjectService = {
  name: string;
  description: string;
  links: { label: string; href: string }[];
};

type Project = {
  number: string;
  name: string;
  subtitle: string;
  period?: string;
  role: string;
  github?: string;
  links?: { label: string; href: string }[];
  website?: string;
  description: string;
  result?: { value: string; label: string };
  work: { title: string; description: string }[];
  stack: string[];
  architecture?: "mail";
  services?: ProjectService[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "SYU.KR",
    subtitle: "삼육대학교 학생을 위한 웹 서비스 플랫폼",
    period: "2023.01 — 현재",
    role: "Full-stack / Infra",
    github: "https://github.com/syu-kr",
    website: "https://www.syu.kr/",
    description:
      "삼육대학교 학생을 위한 웹 서비스 플랫폼을 개발하고 운영하고 있습니다. 시간표 작성, 모의 수강신청, 셔틀버스 정보 등 학생들이 사용하는 서비스와 서버 인프라를 관리합니다.",
    result: {
      value: "64,000+",
      label: "누적 이용자 (Google Analytics 4 기준)",
    },
    services: [
      {
        name: "시간표 마법사",
        description:
          "학과·학년·요일·학점별 강의 검색, 시간표 작성·공유 및 이미지 다운로드",
        links: [
          { label: "시간표 만들기", href: "https://lecture.syu.kr/timetable" },
        ],
      },
      {
        name: "모의 수강신청",
        description:
          "수강신청 화면과 대기열을 재현해 로그인 시점과 신청 과정을 연습하는 서비스",
        links: [
          { label: "모의 수강신청", href: "https://sugang.syu.kr/testLogin" },
        ],
      },
      {
        name: "장바구니 경쟁률",
        description:
          "전체·교양 과목의 신청 인원과 경쟁률 조회, 강좌·교수 검색 및 순위 비교",
        links: [
          { label: "전체 과목", href: "https://sugang.syu.kr/basket" },
          { label: "교양 과목", href: "https://sugang.syu.kr/liberalarts" },
        ],
      },
      {
        name: "셔틀버스 정보",
        description:
          "지도·노선도 기반 버스 위치와 정류장별 도착 예정 시간, 운행 현황 제공",
        links: [
          { label: "실시간 지도", href: "https://bus.syu.kr/" },
          { label: "노선도", href: "https://bus.syu.kr/bus" },
          { label: "도착시간", href: "https://bus.syu.kr/arrivalTime" },
        ],
      },
      {
        name: "SYU 공지 알리미",
        description:
          "학교 공지 조회와 새 공지 알림, 알림 주기 설정을 제공하는 Chrome 확장 프로그램",
        links: [
          { label: "Chrome 웹 스토어", href: "https://www.syu.kr/notice" },
        ],
      },
      {
        name: "한끼",
        description:
          "삼육대학교 후문 음식점·카페를 거리순으로 탐색하는 맛집 서비스",
        links: [{ label: "후문 맛집 보기", href: "https://food.syu.kr/" }],
      },
    ],
    work: [
      {
        title: "서비스 개발·운영",
        description:
          "학생 대상 서비스 기획·개발, 기능 개선 및 서버 인프라 관리",
      },
      {
        title: "배포 자동화",
        description:
          "Docker·Nginx·PM2 기반 운영 환경과 GitHub Actions 빌드·배포 파이프라인 구성",
      },
      {
        title: "Nginx·Lua",
        description:
          "Nginx HTTP/3 (QUIC) 환경과 Lua 스크립트 구성, Let's Encrypt TLS 인증서 갱신 자동화",
      },
    ],
    stack: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "Express",
      "NestJS",
      "MySQL",
      "Redis",
      "Docker",
      "Nginx",
      "Lua",
      "PM2",
      "GitHub Actions",
    ],
  },
  {
    number: "02",
    name: "SYU.KR 메일 서비스",
    subtitle: "메일 인프라 구축 및 웹메일 개발",
    role: "Full-stack / Infra",
    links: [
      {
        label: "메일 서버",
        href: "https://github.com/0verfl0w767/mail-register",
      },
      { label: "웹메일", href: "https://github.com/0verfl0w767/Relay-Mail" },
    ],
    description:
      "SYU.KR 도메인의 메일 송수신 인프라를 구축하고, Roundcube를 대체하는 Next.js 기반 웹메일을 개발했습니다. 계정 발급부터 SMTP·IMAP 연동, 세션 관리와 실시간 새 메일 알림까지 하나의 메일 서비스로 구성했습니다.",
    work: [
      {
        title: "메일 인프라",
        description:
          "Postfix SMTP·STARTTLS와 Dovecot IMAP·TLS 연동, 가상 사용자별 Maildir 저장소 구성",
      },
      {
        title: "메일 인증·스팸 필터",
        description:
          "OpenDKIM 발신 서명과 Rspamd의 SPF·DKIM·DMARC 검증 및 스팸 필터 구성",
      },
      {
        title: "계정 관리",
        description:
          "NestJS·TypeORM 기반 계정 발급·조회·삭제·활성 상태 관리, JWT 관리자 인증, Dovecot 호환 비밀번호 해시 및 Maildir 자동 생성",
      },
      {
        title: "웹메일",
        description:
          "IMAP 폴더·메일 조회와 검색, SMTP 발송·보낸편지함 저장, 답장·전달, HTML 편집·첨부파일·임시보관함 구현",
      },
      {
        title: "연결·실시간 알림",
        description:
          "세션별 IMAP·SMTP 연결 재사용, IMAP IDLE·SSE를 이용한 새 메일 갱신과 브라우저 알림",
      },
      {
        title: "세션·메일 보안",
        description:
          "Redis 세션 관리, AES-256-GCM 메일 로그인 정보 암호화, 본문 HTML 필터링 및 메일 인증 결과 표시",
      },
      {
        title: "배포·운영",
        description:
          "Nginx HTTPS·요청 제한, Docker Compose 웹메일·Redis 환경, PM2 프로세스 관리 및 GitHub Actions 빌드·배포 자동화",
      },
    ],
    stack: [
      "Ubuntu Server",
      "Postfix",
      "Dovecot",
      "OpenDKIM",
      "Rspamd",
      "NestJS",
      "TypeORM",
      "MariaDB",
      "Next.js",
      "ImapFlow",
      "Nodemailer",
      "Redis",
      "Docker",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
    architecture: "mail",
  },
  {
    number: "03",
    name: "삼육대학교 컴퓨터공학부 홈페이지",
    subtitle: "교내 온프레미스 기반 학과 공식 웹 서비스",
    role: "Project Lead / Backend / Infra",
    github: "https://github.com/syu-cse-labs/comp-site",
    website: "https://cse.syu.ac.kr/",
    description:
      "삼육대학교 컴퓨터공학부 공식 홈페이지의 프로젝트 총괄과 백엔드·인프라 개발을 담당했습니다. 교내 NAS 설치를 포함한 온프레미스 운영 환경을 구축하고, 관리자 CMS·게시판 데이터 모델·공지 동기화 파이프라인과 배포 자동화를 구현했습니다.",
    work: [
      {
        title: "프로젝트 총괄",
        description:
          "요구사항 정의부터 시스템 구조 설계, 개발, 교내 배포와 운영까지 프로젝트 전 과정 총괄",
      },
      {
        title: "온프레미스 인프라",
        description:
          "교내 NAS 직접 설치와 Ubuntu Linux 기반 운영 환경 구축, Nginx HTTPS 리버스 프록시·PM2 프로세스 관리 구성",
      },
      {
        title: "백엔드·데이터 모델",
        description:
          "Next.js Server Actions·API와 Prisma·MariaDB 기반 관리자·게시글·첨부파일·메인 배너 데이터 모델 및 CMS 구현",
      },
      {
        title: "공지 데이터 파이프라인",
        description:
          "Cheerio 기반 학교 공지 수집, 2년치 초기 시딩과 upsert 중복 제어, node-cron 정기 동기화 및 MariaDB 분산 락 구성",
      },
      {
        title: "접근 제어·보안",
        description:
          "관리자·게시글 작성·업로드 경로의 교직원 IP 허용 목록과 Auth.js 관리자 세션, HSTS·CSP 등 Nginx 보안 헤더 적용",
      },
      {
        title: "배포 자동화",
        description:
          "GitHub Actions SSH 배포에서 소스 동기화, 의존성 설치, Next.js 빌드와 PM2 프로세스 재시작 자동화",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Server Actions",
      "Auth.js",
      "Prisma",
      "MariaDB",
      "Cheerio",
      "node-cron",
      "On-premise NAS",
      "Ubuntu Server",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
  },
  {
    number: "04",
    name: "Map Data Fetcher",
    subtitle: "네이버·카카오 장소 데이터 수집 API",
    period: "2026.03 — 2026.06",
    role: "Backend / Infra",
    github: "https://github.com/D2D-CAPSTONE/map-data-fetcher",
    description:
      "네이버 지도와 카카오맵의 서로 다른 검색 방식을 하나의 Spring Boot API로 제공했습니다. 네이버 지도는 Headless Chrome으로 검색 화면을 구동하고 Chrome DevTools Protocol에서 네트워크 응답을 수집했으며, 카카오는 Spring RestClient로 검색 API를 연동했습니다.",
    work: [
      {
        title: "검색 API 설계",
        description:
          "검색어 기반 조회와 중심 좌표·반경 기반 조회를 지도별 엔드포인트 4종으로 분리하고 요청값 검증 적용",
      },
      {
        title: "네이버 응답 수집",
        description:
          "Selenium WebDriver로 Headless Chrome을 구동하고 CDP Network 이벤트에서 검색 응답을 식별·수집하도록 구현",
      },
      {
        title: "카카오 API 연동",
        description:
          "Spring RestClient로 카카오맵 검색 요청과 Kakao Local 키워드 검색 API를 연동하고 응답을 Jackson으로 처리",
      },
      {
        title: "장애·설정 오류 처리",
        description:
          "요청값 오류, API 키 누락, 외부 호출 실패와 응답 수집 타임아웃을 400·500·502 상태로 분리해 표준 오류 응답 제공",
      },
      {
        title: "API 명세·코드 품질",
        description:
          "Swagger UI·OpenAPI 3로 요청·응답과 오류 사례를 문서화하고 Spotless·google-java-format으로 코드 형식 자동화",
      },
      {
        title: "CI/CD·운영",
        description:
          "GitHub Actions에서 JAR 빌드 후 GCP Compute Engine으로 전송하고, Nginx 리버스 프록시와 PM2 프로세스 재시작까지 자동화",
      },
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring MVC",
      "Spring RestClient",
      "Selenium",
      "Chrome DevTools Protocol",
      "Jackson",
      "Swagger / OpenAPI",
      "Spotless",
      "GCP Compute Engine",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
  },
];

export const skillCategories = [
  {
    category: "Backend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Node.js",
      "Express",
      "NestJS",
      "Spring Boot",
    ],
  },
  { category: "Database", skills: ["MySQL", "MariaDB", "SQLite", "Redis"] },
  {
    category: "Infrastructure",
    skills: ["Docker", "Nginx", "PM2", "GitHub Actions"],
  },
  { category: "Frontend", skills: ["Next.js", "Vue.js"] },
];

export const certifications = [
  { name: "정보보안산업기사", status: "필기 합격" },
  { name: "정보처리산업기사", status: "취득" },
  { name: "프로그래밍기능사 (구, 정보처리기능사)", status: "취득" },
  { name: "SQLD", status: "취득" },
  { name: "리눅스마스터 2급", status: "취득" },
];

export const activities = [
  {
    title: "해외 ICT 봉사 · 최우수상",
    organization: "삼육대학교 · 베트남 다낭외국어대학교",
    period: "2026.07.12 — 2026.07.27",
    description:
      "현지 대학생 대상 HTML·CSS·JavaScript 웹 프로그래밍 교육. 교내 8개 팀 중 최우수상 수상",
    type: "교육 · 수상",
  },
  {
    title: "Windows 보안 패치 프로그램 · 대대장 표창",
    organization: "대한민국 해군",
    period: "2024.08.19 — 2024.11.18",
    description:
      "Windows 10/11의 레지스트리와 시스템 설정에 보안 패치를 적용하는 프로그램 개발. PC 보안 취약점 개선에 기여하여 대대장 표창 수상",
    type: "개발 · 수상",
  },
  {
    title: "컴퓨터공학부 학생회",
    organization: "삼육대학교",
    period: "2023.03 — 2023.12",
    description: "컴퓨터공학부 학생회 활동",
    type: "활동",
  },
];
