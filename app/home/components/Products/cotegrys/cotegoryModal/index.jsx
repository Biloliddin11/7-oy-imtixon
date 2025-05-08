'use client'
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Link from 'next/link';
import useFilterStore from '@/app/redux/openFilter';

const CotegoryModal = ({ categories }) => {
  const { authFilter, authFilterSet } = useFilterStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <Modal
      open={authFilter}
      onCancel={authFilterSet} 
      footer={null}
      centered
    >
      <div>
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Categories</h2>
        <ul className="mt-[8px] pl-[12px]">
          {data.map(({ name, slug }) => (
            <li
              key={slug}
              className={`${
                categories === slug ? 'text-[#46A358] font-bold' : 'font-normal'
              } hover:text-[#46A358] leading-[40px] text-[15px] text-[#3D3D3D] duration-[0.3s] hover:font-bold`}
            >
              <Link
                className='text-black'
                href={`?category=${slug}`}
                scroll={false}
                onClick={authFilterSet}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default CotegoryModal;
