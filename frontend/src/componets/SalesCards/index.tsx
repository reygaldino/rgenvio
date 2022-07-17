import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Client } from "../../models/client";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../notificationButton';
import './style.css';


function SalesCards() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [client, setClient] = useState<Client[]>([]);

    useEffect(() => {
        const dataMin = minDate.toISOString().slice(0,10);
        const dataMax = maxDate.toISOString().slice(0,10);
        axios.get(`${BASE_URL}/client?minDate=${dataMin}&maxDate=${dataMax}`).then(response => {
            setClient(response.data.content);
        });
    }, [minDate,maxDate]);

    return (
        <div className="card">
            <h2 className="sales-title">Envio de SMS</h2>
            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.map(client => {
                            return(
                            <tr key={client.id}>
                                <td className="show992">{client.id}</td>
                                <td className="show576">{new Date(client.date).toLocaleDateString()}</td>
                                <td>{client.sellerName}</td>
                                <td className="show992">{client.visited}5</td>
                                <td className="show992">{client.deals}</td>
                                <td>R$ {client.amount.toFixed(2)}</td>
                                <td>
                                    <div className="red-btn-container">
                                        <NotificationButton clientId={client.id} />
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCards;
