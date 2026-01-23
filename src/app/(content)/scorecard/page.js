'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Modal from '@/app/components/ui/Modal';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);           // ← auto-open on mount
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    router.push('/');  
  };


  return (
    <div className="scorecard-container">
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title="ScoreCard Restricted"
        message="Access is Exclusive to Orienteers"
      />
      <div className='scbg'>
      <Image
        src="/scf9.png"
        alt="Front 9"
        width={324}
        height={810}
        />
      </div>
      <div className='scbg'>
      <Image
        src="/scb9.png"
        alt="Back 9"
        width={324}
        height={810}
        />
      </div>
    </div>
  )
}
