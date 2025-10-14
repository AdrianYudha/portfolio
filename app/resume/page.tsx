"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function ResumePage() {
  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button and download - only visible on screen */}
      <div className="print:hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>
          <Button onClick={handleDownload} variant="secondary" className="gap-2">
            <Download className="h-4 w-4" />
            Download/Print Resume
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto p-8 max-w-4xl">
        <div className="bg-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dhimas Adrian Arby Wirayudha</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                yudhaa.belajar@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                0878-7427-8856
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Jln. Jambu No 13, RT 18 RW 06, Kel. Yosomulyo, Kec. Metro Pusat
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <span>22 Tahun · Belum Menikah</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Ringkasan Profil
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mahasiswa S1 Ilmu Komputer (Semester 8) Universitas Muhammadiyah Metro yang memahami hardware dan software
              komputer, instalasi dan konfigurasi sistem operasi (Windows, Linux), konfigurasi Mikrotik (manajemen
              bandwidth, hotspot, DNS, routing, VPN), serta dasar pemrograman (HTML, CSS, JavaScript, PHP, Python) dan
              pembuatan landing page menggunakan Tailwind CSS. Terbiasa menggunakan tools AI.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Keterampilan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Teknis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Memahami hardware dan software komputer</li>
                  <li>Instalasi & konfigurasi OS (Windows, Linux)</li>
                  <li>Merakit, upgrade komponen & troubleshooting komputer</li>
                  <li>Konfigurasi Mikrotik: Bandwidth, Hotspot, DNS, NAT, OSPF, L2TP, Tunnel, VPN, PPPoE, Failover</li>
                  <li>Konsep jaringan: Firewall, RoMON, Static & Dynamic Routing</li>
                  <li>Memahami basic pemrograman: HTML, CSS, JavaScript, PHP, Python</li>
                  <li>Membuat landing page (Bootstrap, Tailwind CSS)</li>
                  <li>Terbiasa menggunakan Tools AI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lainnya</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Time management, komunikasi efektif</li>
                  <li>Critical thinking, teamwork, adaptif</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Pengalaman Kerja
            </h2>

            {/* Add more projects or experiences if needed */}
          </section>

          {/* Projects & Achievements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Proyek Yang Pernah Dikerjakan
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Troubleshoot Komputer & Lab Komputer</li>
              <li>Instalasi OS Windows 10, Linux (Mint, Ubuntu) dan Microsoft Office 2007 & 2021</li>
              <li>
                MikroTik: Hotspot, Bridge, Manajemen Bandwidth, User Profiles & Users, Setting TP-Link, Design Captive
                Portal
              </li>
              <li>Website Sistem Informasi Buah Buahan (HTML, Tailwind CSS, PHP)</li>
            </ul>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Riwayat Pendidikan
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Universitas Muhammadiyah Metro</h3>
                    <p className="text-gray-600">S1 Ilmu Komputer · Semester 8 (Menunggu Yudisium dan Wisuda)</p>
                  </div>
                  <p className="text-gray-600">2021 – Sekarang</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">SMK IB Khalifah Bangsa (Pink Campus)</h3>
                    <p className="text-gray-600">Teknik Komputer dan Jaringan</p>
                  </div>
                  <p className="text-gray-600">Lulus 2021</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Soft Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Soft Skills</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Self-Motivated</li>
                <li>• Effective Communication</li>
                <li>• Time Management</li>
                <li>• Critical Thinking</li>
                <li>• Teamwork & Adaptability</li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Bahasa</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Bahasa Indonesia (Native)</li>
                <li>• English (Intermediate)</li>
              </ul>
            </section>
          </div>

          {/* References */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Referensi</h2>
            <p className="text-gray-700 italic">Tersedia jika diminta</p>
          </section>
        </div>
      </div>
    </div>
  )
}
