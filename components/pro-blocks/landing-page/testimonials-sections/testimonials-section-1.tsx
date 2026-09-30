"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { publicPath } from "@/lib/utils";

interface TestimonialsSection1Props {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
}

export default function TestimonialsSection1({
  quote = "MindSpace is like having a photographic memory for every meeting. We reduced the follow-up emails by 80%.",
  authorName = "David Park",
  authorRole = "Engineering Manager at TechCorp",
  avatarSrc = "/DavidPark.png",
}: TestimonialsSection1Props) {
  return (
    <section
      className="container-padding-x section-padding-y flex flex-col items-center border-b bg-[#001731]"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex max-w-2xl flex-col items-center gap-8">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="heading-md text-center text-white"
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 rounded-xl ring-2 ring-white md:h-14 md:w-14">
            <AvatarImage src={publicPath(avatarSrc)} alt={authorName} />
          </Avatar>

          {/* Author Details */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
            <span className="text-base font-medium text-white">
              {authorName}
            </span>
            <span className="hidden text-white opacity-50 md:inline-block">
              •
            </span>
            <span className="text-base text-white/80">{authorRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
