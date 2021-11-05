import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { BASE_URL } from "utils/requests";
import { formatLocalDate } from "utils/format";
import Pagination from "components/Pagination";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
      
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0

    });


    useEffect(() => {

        axios.get(`${BASE_URL}/sales?page=${activePage}&size5&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);

    const chagePage = (index: number) => {
        setActivePage(index);
    }
    return (
        <>
            <Pagination page={page} onPageChange={chagePage} />

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes Vistados</th>
                            <th>Negócios Fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {page.content?.map(item => (

                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>

                            </tr>


                        ))}

                    </tbody>
                </table>
            </div >
        </>
    );
}

export default DataTable;


