import Image from "next/image";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";

export default function Hero() {
  return (
    <div className="profile">
      <div className="profile-heading">
        <Image className="profile-photo" src="/profile.jpg" alt="김상윤 프로필 사진" width={80} height={103} priority />
        <div>
          <h1>{profile.name}</h1>
          <p className="profile-english">{profile.englishName}</p>
          <p className="profile-role">{profile.role}</p>
        </div>
      </div>
      <div className="profile-links">
        <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="email-link" href={`mailto:${profile.secondaryEmail}`}>{profile.secondaryEmail}</a>
        <div className="profile-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
          <a href={profile.blog} target="_blank" rel="noopener noreferrer">Blog <ArrowUpRight /></a>
        </div>
      </div>
    </div>
  );
}
