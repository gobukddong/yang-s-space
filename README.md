# Yang's Space

숭실대학교 AI소프트웨어학과 양상윤의 인터랙티브 포트폴리오 웹사이트입니다.
영상, 프로젝트, 활동, 자격증과 기술 스택을 한 화면의 우주 테마로 표현했습니다.

## 주요 기능

- **Videos** - 유튜브 프로젝트 영상과 상세 모달
- **Projects** - 보안, 웹 개발, 크리에이티브 프로젝트 소개
- **Activities** - ASC, 문제 해결, 블로그, 백준 활동
- **Certifications** - CMD 스타일 터미널에서 자격증을 랜덤 타이핑 효과로 확인
- **Tech Stack** - 클릭하면 손상되고 복구할 수 있는 기술 스택 벽돌
- 반응형 레이아웃, 스크롤 진행 표시, 고정 내비게이션
- Instagram 및 이메일 바로가기

## 기술 스택

- **Framework:** Next.js 16, React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Graphics:** Matter.js
- **Icons:** Lucide React

## 로컬 실행

요구 사항:

- Node.js 20 이상
- npm

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 빌드 및 검사

```bash
npm run lint
npm run build
npm run start
```

## 프로젝트 구조

```text
src/
├── app/
│   ├── page.tsx               # 메인 포트폴리오 페이지
│   ├── layout.tsx             # 전역 레이아웃과 메타데이터
│   ├── projects/[id]/         # 프로젝트 상세 페이지
│   └── activities/[id]/       # 활동 상세 페이지
├── components/                # 섹션과 인터랙티브 UI 컴포넌트
└── data/
    ├── projects.ts            # 영상 프로젝트 데이터
    ├── activities.ts          # 활동 데이터
    ├── documents.ts           # 프로젝트 목록 데이터
    └── problems.ts            # 문제 풀이 데이터
```

## 대표 프로젝트

- **React2Shell Vulnerability Scanner** - React 애플리케이션 취약점 진단 도구
- **Linux Vulnerability Scanner** - Linux 환경 취약점 진단 도구
- **Ocean Cleanup** - 크리에이티브 프로젝트
- **Air Drum** - 공학 설계 프로젝트
- **Meetplz** - 일정 관리 및 실시간 소셜 플랫폼

## 링크

- GitHub: [gobukddong](https://github.com/gobukddong)
- Blog: [yangsangyunblog](https://yangsangyunblog.tistory.com/)
- Solved.ac: [gobukddang](https://solved.ac/profile/gobukddang)
- Instagram: [yun_61114](https://instagram.com/yun_61114)
- Email: [gobukddang@gmail.com](mailto:gobukddang@gmail.com)

## 라이선스

이 저장소의 소스와 포트폴리오 콘텐츠는 개인 포트폴리오 목적을 위한 프로젝트입니다.
