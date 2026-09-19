export default function MailArchitecture() {
  return (
    <details className="mail-architecture">
      <summary>메일 인프라 구성도</summary>
      <figure aria-label="메일 서버와 계정 관리 서비스, Relay-Mail의 연동 구조. Nginx는 계정 API와 웹메일의 HTTPS 요청을 전달합니다. 계정 API는 MariaDB에 계정을 저장하고 Maildir 저장소를 생성하며, Relay-Mail은 Postfix와 Dovecot에 SMTP와 IMAP으로 연결합니다. Redis에는 웹메일 로그인 세션을 저장합니다.">
        <figcaption>Ubuntu Server 22.04 LTS · 계정 서비스와 Relay-Mail 연동</figcaption>
        <div className="architecture-node architecture-gateway">
          <strong>Nginx</strong><span>HTTPS · 리버스 프록시</span>
        </div>
        <div className="architecture-branches">
          <div className="architecture-branch">
            <div className="architecture-node"><strong>계정 관리 API</strong><span>NestJS · JWT · TypeORM</span></div>
            <span className="architecture-arrow" aria-hidden="true">↓</span>
            <div className="architecture-node"><strong>MariaDB</strong><span>메일 계정 · 인증 정보</span></div>
          </div>
          <div className="architecture-branch">
            <div className="architecture-node"><strong>Relay-Mail</strong><span>Next.js · Webmail</span></div>
            <span className="architecture-arrow" aria-hidden="true">↓</span>
            <div className="architecture-node"><strong>Redis</strong><span>로그인 세션 · 암호화된 로그인 정보</span></div>
          </div>
        </div>
        <p className="architecture-account">계정 API → MariaDB 계정 저장 · Maildir 자동 생성</p>
        <div className="architecture-mail">
          <p className="architecture-connection">웹메일 ↔ 메일 서버 <span>SMTP / IMAP</span></p>
          <div className="architecture-mail-services">
            <div><strong>Postfix</strong><span>SMTP · STARTTLS</span></div>
            <div><strong>Dovecot</strong><span>IMAP · TLS · IDLE</span></div>
          </div>
          <p className="architecture-storage">Maildir · 가상 사용자 메일 저장소</p>
          <p className="architecture-auth">OpenDKIM · Rspamd <span>메일 서명 · 인증 검증 · 스팸 필터</span></p>
        </div>
        <p className="architecture-operations">운영: Docker Compose · PM2 · GitHub Actions 빌드·배포</p>
        <a className="text-link" href="https://github.com/0verfl0w767/mail-register/blob/main/README.md" target="_blank" rel="noopener noreferrer">구성 문서 보기 ↗</a>
      </figure>
    </details>
  );
}
