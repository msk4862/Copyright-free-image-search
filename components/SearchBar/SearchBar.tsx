'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

export const SearchBar = ({ className = '' }: { className?: string }) => {
  const [searchItem, setSearchItem] = useState('');
  const router = useRouter();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchItem) {
      return;
    }

    console.log('serch', searchItem);
    router.push(`/images/${searchItem}`);
  };

  return (
    <form className={clsx('flex', className)} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="text-slate-950 p-3 pt-2 pb-2 w-full"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchItem(event.target.value)
        }
      />
      <button type="submit" className="bg-blue-600 pl-2 pr-2">
        Search
      </button>
    </form>
  );
};
