export interface SocialLink {
  label: string;  // e.g. "GitHub", "LinkedIn", "Portafolio"
  url: string;
}

export interface Profile {
  name: string;
  carnet: string;
  avatarUrl: string;   // "/profile.jpg" o URL externa
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  skills?: string[];
  links?: SocialLink[];
  cvUrl?: string;      // "/docs/cv.pdf"
}
