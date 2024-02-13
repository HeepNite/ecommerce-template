interface Props {
    currentPage: number
    totalPages: number
}

export const numbersPag = ({ currentPage, totalPages }: Props) => {


    switch (true) {
        case totalPages <= 7:
            return Array.from({ length: totalPages }, (_, i) => i + 1)
            break;

        case currentPage <= 3:
            return [1, 2, 3, '...', totalPages - 1, totalPages]
            break;

        case currentPage >= totalPages - 2:
            return [1, 2, '...', totalPages - 1, totalPages - 1, totalPages]
            break;

        case currentPage >= totalPages - 2:
            return [1, 2, '...', totalPages - 1, totalPages - 1, totalPages]
            break;

        default:
            return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
            break;
    }

}