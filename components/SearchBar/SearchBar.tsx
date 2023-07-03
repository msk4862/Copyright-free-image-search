'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export const SearchBar = ({ className = '' }: { className?: string }) => {
  const [searchItem, setSearchItem] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const search = pathname.split('/').pop() || '';
    setSearchItem(search);
  }, [pathname]);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchItem) {
      return;
    }
    router.push(`/photos/${searchItem}`);
  };

  return (
    <form className={clsx('flex', className)} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="text-sm md:text-base text-slate-950 p-3 pt-2 pb-2 w-full rounded-l-3xl outline-none"
        value={searchItem}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchItem(event.target.value)
        }
        placeholder="Type here..."
      />
      <button
        type="submit"
        className="text-sm md:text-base bg-green-600 p-1 md:pl-2 md:pr-2 rounded-r-3xl"
      >
        Search
      </button>
    </form>
  );
};
