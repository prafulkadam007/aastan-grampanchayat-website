'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { 
  Users, 
  FileText, 
  ImageIcon, 
  Phone, 
  MapPin, 
  Mail,
  ChevronRight,
  ChevronLeft,
  Award,
  Droplets,
  Zap,
  Building2,
  Globe,
  Home,
  Bell,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      image: "/images/dev-works/work1.jpg",
      title: locale === 'mr' ? 'विकास प्रकल्प १' : 'Development Project 1',
      description: locale === 'mr' ? 'गावाच्या विकासासाठी महत्त्वाचे प्रकल्प' : 'Important project for village development',
      status: 'completed',
      budget: locale === 'mr' ? '₹२५ लाख' : '₹25 Lakhs',
      year: '2024'
    },
    {
      id: 2,
      image: "/images/dev-works/work2.jpg",
      title: locale === 'mr' ? 'विकास प्रकल्प २' : 'Development Project 2',
      description: locale === 'mr' ? 'गावाच्या प्रगतीसाठी नवीन प्रकल्प' : 'New project for village progress',
      status: 'completed',
      budget: locale === 'mr' ? '₹२० लाख' : '₹20 Lakhs',
      year: '2024'
    },
    {
      id: 3,
      image: "/images/dev-works/work3.jpg",
      title: locale === 'mr' ? 'विकास प्रकल्प ३' : 'Development Project 3',
      description: locale === 'mr' ? 'समुदायाच्या कल्याणासाठी प्रकल्प' : 'Project for community welfare',
      status: 'completed',
      budget: locale === 'mr' ? '₹१८ लाख' : '₹18 Lakhs',
      year: '2023'
    },
    {
      id: 4,
      image: "/images/dev-works/work4.jpg",
      title: locale === 'mr' ? 'विकास प्रकल्प ४' : 'Development Project 4',
      description: locale === 'mr' ? 'चालू असलेला विकास प्रकल्प' : 'Ongoing development project',
      status: 'inProgress',
      budget: locale === 'mr' ? '₹१५ लाख' : '₹15 Lakhs',
      year: '2024'
    },
    {
      id: 5,
      image: "/images/dev-works/work5.jpg",
      title: locale === 'mr' ? 'विकास प्रकल्प ५' : 'Development Project 5',
      description: locale === 'mr' ? 'गावाच्या भविष्यासाठी प्रकल्प' : 'Project for village future',
      status: 'completed',
      budget: locale === 'mr' ? '₹२२ लाख' : '₹22 Lakhs',
      year: '2024'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'mr' ? 'en' : 'mr';
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header with Indian Flag Colors - Mobile First */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-1 sm:h-2"></div>
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
                  {locale === 'mr' ? 'ग्रामपंचायत आस्तान' : 'Gram Panchayat Aastan'}
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 truncate">
                  {locale === 'mr' ? 'खेड • रत्नागिरी • महाराष्ट्र' : 'Khed • Ratnagiri • Maharashtra'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <nav className="hidden lg:flex gap-4 xl:gap-6">
                <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition text-sm xl:text-base">
                  {t('nav.home')}
                </a>
                <a href="#members" className="text-gray-700 hover:text-orange-600 font-medium transition text-sm xl:text-base">
                  {t('nav.members')}
                </a>
                <a href="#works" className="text-gray-700 hover:text-orange-600 font-medium transition text-sm xl:text-base">
                  {t('nav.works')}
                </a>
                <a href="#notifications" className="text-gray-700 hover:text-orange-600 font-medium transition text-sm xl:text-base">
                  {t('nav.notifications')}
                </a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition text-sm xl:text-base">
                  {t('nav.contact')}
                </a>
              </nav>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 sm:gap-2 bg-orange-100 hover:bg-orange-200 active:bg-orange-300 text-orange-700 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold transition text-xs sm:text-sm touch-target"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{locale === 'mr' ? 'English' : 'मराठी'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Office Photo - Mobile First */}
      <section id="home" className="py-8 sm:py-12 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                {t('hero.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                {t('hero.subtitle')}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                {t('info.established')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#members"
                  className="bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-700 active:bg-orange-800 transition flex items-center justify-center gap-2 text-sm sm:text-base touch-target"
                >
                  {t('hero.meetTeam')} <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#works"
                  className="bg-white text-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 active:bg-gray-100 transition border-2 border-orange-600 text-sm sm:text-base touch-target text-center"
                >
                  {t('hero.viewWork')}
                </a>
              </div>
            </div>
            <div className="relative h-56 sm:h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl order-1 md:order-2">
              <Image
                src="/images/office.jpg"
                alt="Astan Gram Panchayat Office"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile First */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-lg sm:rounded-xl">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">२,९८५</p>
              <p className="text-xs sm:text-sm text-gray-600">{t('stats.population')}</p>
              <div className="mt-2 pt-2 border-t border-orange-200">
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {locale === 'mr' ? 'पुरुष: १,१४३ | स्त्री: १,०४२' : 'Male: 1,143 | Female: 1,042'}
                </p>
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-lg sm:rounded-xl">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">६८६</p>
              <p className="text-xs sm:text-sm text-gray-600">{t('stats.households')}</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg sm:rounded-xl">
              <Home className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">५</p>
              <p className="text-xs sm:text-sm text-gray-600">{locale === 'mr' ? 'अंगणवाडी' : 'Anganwadi'}</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-yellow-50 rounded-lg sm:rounded-xl">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">६</p>
              <p className="text-xs sm:text-sm text-gray-600">{locale === 'mr' ? 'शासकीय शाळा' : 'Govt. Schools'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panchayat Members Section - Simple Government Style - Mobile First */}
      <section id="members" className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {t('members.title')}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              {t('members.subtitle')}
            </p>
          </div>

          {/* Leadership - Single Row (More Prominent) - Mobile First */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 p-4 sm:p-6">
              {/* Sarpanch */}
              <div className="text-center border-b border-gray-200 sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 last:border-b-0 sm:last:border-r-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-gray-100 mx-auto mb-3">
                  <Image
                    src="/images/members/sarpanch.jpg"
                    alt={t('members.sarpanch.name')}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 hidden" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  {t('members.sarpanch.title')}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 break-words">
                  {t('members.sarpanch.name')}
                </p>
                <p className="text-xs text-gray-600 mb-2">{t('members.sarpanch.tenure')}</p>
                <a href={`tel:${t('members.sarpanch.phone')}`} className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition flex items-center justify-center gap-1 touch-target">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t('members.sarpanch.phone')}
                </a>
              </div>

              {/* Up-Sarpanch */}
              <div className="text-center border-b border-gray-200 sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 last:border-b-0 sm:last:border-r-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-gray-100 mx-auto mb-3">
                  <Image
                    src="/images/members/up-sarpanch.jpg"
                    alt={t('members.upSarpanch.name')}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 hidden" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  {t('members.upSarpanch.title')}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 break-words">
                  {t('members.upSarpanch.name')}
                </p>
                <p className="text-xs text-gray-600 mb-2">{t('members.upSarpanch.tenure')}</p>
                <a href={`tel:${t('members.upSarpanch.phone')}`} className="text-xs sm:text-sm text-gray-600 hover:text-green-600 transition flex items-center justify-center gap-1 touch-target">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t('members.upSarpanch.phone')}
                </a>
              </div>

              {/* Gram Vikas Adhikari */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-gray-100 mx-auto mb-3">
                  <Image
                    src="/images/members/gram-sevak.jpg"
                    alt={t('members.gramSevak.name')}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 hidden" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  {t('members.gramSevak.title')}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 break-words">
                  {t('members.gramSevak.name')}
                </p>
                <p className="text-xs text-gray-600 mb-2">{t('members.gramSevak.role')}</p>
                <a href={`tel:${t('members.gramSevak.phone')}`} className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition flex items-center justify-center gap-1 touch-target">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t('members.gramSevak.phone')}
                </a>
              </div>
            </div>
          </div>

          {/* Staff Section - Single Row (Less Prominent) - Mobile First */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-3 text-center">
              {t('members.staff.title')}
            </h3>
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4">
                {/* Clerk */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden bg-gray-100 mx-auto mb-2">
                    <Image
                      src="/images/members/clerk.jpg"
                      alt={t('members.staff.clerk.name')}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hidden" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                    {t('members.staff.clerk.title')}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 break-words px-1">
                    {t('members.staff.clerk.name')}
                  </p>
                  <a href={`tel:${t('members.staff.clerk.phone')}`} className="text-[10px] sm:text-xs text-gray-600 hover:text-orange-600 transition touch-target">
                    {t('members.staff.clerk.phone')}
                  </a>
                </div>

                {/* Computer Operator */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden bg-gray-100 mx-auto mb-2">
                    <Image
                      src="/images/members/operator.jpg"
                      alt={t('members.staff.operator.name')}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hidden" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                    {t('members.staff.operator.title')}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 break-words px-1">
                    {t('members.staff.operator.name')}
                  </p>
                  <a href={`tel:${t('members.staff.operator.phone')}`} className="text-[10px] sm:text-xs text-gray-600 hover:text-orange-600 transition touch-target">
                    {t('members.staff.operator.phone')}
                  </a>
                </div>

                {/* Shipai */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden bg-gray-100 mx-auto mb-2">
                    <Image
                      src="/images/members/shipai.jpg"
                      alt={t('members.staff.shipai.name')}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hidden" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                    {t('members.staff.shipai.title')}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 break-words px-1">
                    {t('members.staff.shipai.name')}
                  </p>
                  <a href={`tel:${t('members.staff.shipai.phone')}`} className="text-[10px] sm:text-xs text-gray-600 hover:text-orange-600 transition touch-target">
                    {t('members.staff.shipai.phone')}
                  </a>
                </div>

                {/* MGNREGA Inspector */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden bg-gray-100 mx-auto mb-2">
                    <Image
                      src="/images/members/mgnrega.jpg"
                      alt={t('members.staff.other.name')}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hidden" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                    {t('members.staff.other.title')}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 break-words px-1">
                    {t('members.staff.other.name')}
                  </p>
                  <a href={`tel:${t('members.staff.other.phone')}`} className="text-[10px] sm:text-xs text-gray-600 hover:text-orange-600 transition touch-target">
                    {t('members.staff.other.phone')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panch Members Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('members.panch.title')}: {t('members.panch.total')}
            </p>
          </div>
        </div>
      </section>

      {/* Works/Projects Section - Auto-Sliding Carousel - Mobile First */}
      <section id="works" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {locale === 'mr' ? 'ग्राम विकास' : 'Village Development'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t('works.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              {t('works.subtitle')}
            </p>
          </div>

          {/* Auto-Sliding Carousel */}
          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container - Mobile First */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {/* Slides */}
              <div className="relative w-full h-full">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"></div>
                    
                    {/* Content Overlay - Mobile Optimized */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 text-white">
                      <div className="max-w-3xl">
                        <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 ${
                          project.status === 'completed' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-yellow-500 text-white'
                        }`}>
                          {project.status === 'completed' ? t('works.completed') : t('works.inProgress')}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{project.budget}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Mobile Optimized */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white active:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 touch-target"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white active:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 touch-target"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-orange-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-gray-600">
              <span className="text-sm font-medium">
                {currentSlide + 1} / {projects.length}
              </span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">५</div>
                <div className="text-sm md:text-base opacity-90">
                  {locale === 'mr' ? 'एकूण प्रकल्प' : 'Total Projects'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">४</div>
                <div className="text-sm md:text-base opacity-90">
                  {locale === 'mr' ? 'पूर्ण झालेले' : 'Completed'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">१</div>
                <div className="text-sm md:text-base opacity-90">
                  {locale === 'mr' ? 'सुरू आहे' : 'In Progress'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">₹१००+</div>
                <div className="text-sm md:text-base opacity-90">
                  {locale === 'mr' ? 'लाख खर्च' : 'Lakhs Invested'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications/News Section - Mobile First */}
      <section id="notifications" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t('notifications.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('notifications.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Notification 1 - Important */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-orange-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.important')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'ग्रामसभा बैठक' : 'Gram Sabha Meeting'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'सर्व ग्रामवासीयांना सूचित करण्यात येते की पुढील ग्रामसभा बैठक दिनांक २५ डिसेंबर २०२४ रोजी सकाळी १० वाजता आयोजित करण्यात येणार आहे.'
                    : 'All villagers are informed that the next Gram Sabha meeting will be held on December 25, 2024 at 10:00 AM.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: २० डिसेंबर २०२४' : 'Date: Dec 20, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Notification 2 - Scheme */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.scheme')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'नवीन योजना सुरू' : 'New Scheme Launched'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'पीएम आवास योजना अंतर्गत अर्ज मागविण्यात येत आहेत. पात्र नागरिक कार्यालयात संपर्क करावा.'
                    : 'Applications are invited under PM Awas Yojana. Eligible citizens should contact the office.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: १८ डिसेंबर २०२४' : 'Date: Dec 18, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Notification 3 - General */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-blue-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.general')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'कर भरण्याची सूचना' : 'Tax Payment Notice'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'सर्व नागरिकांना सूचित करण्यात येते की वार्षिक कर भरण्याची अंतिम तारीख ३१ डिसेंबर २०२४ आहे.'
                    : 'All citizens are informed that the last date for annual tax payment is December 31, 2024.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: १५ डिसेंबर २०२४' : 'Date: Dec 15, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Notification 4 - Meeting */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-purple-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.meeting')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'पंचायत समिती बैठक' : 'Panchayat Committee Meeting'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'पंचायत समितीची नियमित बैठक दर महिन्याच्या पहिल्या रविवारी सकाळी ११ वाजता आयोजित केली जाते.'
                    : 'Regular Panchayat Committee meeting is held on the first Sunday of every month at 11:00 AM.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: १२ डिसेंबर २०२४' : 'Date: Dec 12, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Notification 5 - Important */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-red-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <span className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.important')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'पाणीपुरवठा बंद' : 'Water Supply Shutdown'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'दिनांक २२ डिसेंबर २०२४ रोजी पाणीपुरवठा दुरुस्तीसाठी सकाळी ९ ते संध्याकाळी ५ वाजेपर्यंत बंद राहील.'
                    : 'Water supply will be shut down on December 22, 2024 from 9:00 AM to 5:00 PM for maintenance work.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: १० डिसेंबर २०२४' : 'Date: Dec 10, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Notification 6 - Scheme */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border-l-4 border-yellow-600 overflow-hidden hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      {t('notifications.scheme')}
                    </span>
                  </div>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                  {locale === 'mr' ? 'उज्ज्वला योजना' : 'Ujjwala Scheme'}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {locale === 'mr' 
                    ? 'एलपीजी कनेक्शनसाठी अर्ज मागविण्यात येत आहेत. पात्र कुटुंबे कार्यालयात संपर्क करावीत.'
                    : 'Applications are invited for LPG connections. Eligible families should contact the office.'}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                  <span>{locale === 'mr' ? 'दिनांक: ०८ डिसेंबर २०२४' : 'Date: Dec 8, 2024'}</span>
                  <Bell className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* View All Button - Mobile First */}
          <div className="text-center mt-6 sm:mt-8">
            <button className="bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-green-700 active:from-orange-800 active:to-green-800 transition flex items-center gap-2 mx-auto text-sm sm:text-base touch-target">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('notifications.viewAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                {t('contact.office.title')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.office.address')}</p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t('contact.office.addressFull')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.office.phone')}</p>
                    <a href="tel:+918080789174" className="text-gray-600 hover:text-orange-600 transition">
                      +91 8080789174
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.office.email')}</p>
                    <a 
                      href="mailto:grampanchayatastan@gmail.com" 
                      className="text-gray-600 hover:text-orange-600 transition break-all"
                    >
                      grampanchayatastan@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {t('contact.hours.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">{t('contact.hours.weekdays')}</span>
                  <span className="text-gray-600">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">{t('contact.hours.saturday')}</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">{t('contact.hours.sunday')}</span>
                  <span className="text-gray-600">{t('contact.hours.closed')}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>{locale === 'mr' ? 'टीप' : 'Note'}:</strong> {t('contact.hours.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              {t('village.name')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.mission')}
            </p>
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-1 w-32 mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

