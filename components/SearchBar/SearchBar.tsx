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
        className="text-slate-950 p-3 pt-2 pb-2 w-full"
        value={searchItem}
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
