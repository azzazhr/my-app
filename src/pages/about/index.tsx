import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <div>
            <h1>Ini Halaman About </h1> <br />
            <p><b>Nama :</b> Azzahra Attaqina</p>
            <p><b>NIM :</b> 2341720224</p>
            <p><b>Program Studi :</b> D4 Teknik Informatika</p>
        </div>
    );
}
