'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight } from '../svg'

export default function Pagination({ currentPage, totalPages, itemsPerPage }: any) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const [page, setPage] = useState(currentPage || 1)

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const handlePageChange = ({ selected }: { selected: number }) => {
        const nextPage = selected + 1
        setPage(nextPage)
        router.push(pathname + '?' + createQueryString('page', String(nextPage)))
    }

    useEffect(() => {
        const page = searchParams.get('page')
        if (page) {
            setPage(parseInt(page, 10))
        }
    }, [searchParams])

    return (
        <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            previousLabel={
                <div className="flex h-full items-center rounded-full p-1 text-sm hover:bg-slate-200">
                    <ArrowRight className="h-4 w-4 rotate-180 rounded-full sm:h-5 sm:w-5" />
                </div>
            }
            nextLabel={
                <div className="flex h-full items-center rounded-full p-1 text-sm hover:bg-slate-200">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
            }
            onPageChange={handlePageChange}
            forcePage={page - 1}
            previousClassName="text-sm"
            containerClassName="flex flex-row gap-2 w-full justify-center items-center"
            pageClassName="h-full flex items-center justify-center border border-slate-400 hover:bg-slate-200 rounded-sm cursor-pointer"
            activeClassName="bg-slate-300"
            pageLinkClassName="h-7 w-7 lg:w-7 lg:h-6 flex items-center justify-center text-[##484848]"
        />
    )
}
