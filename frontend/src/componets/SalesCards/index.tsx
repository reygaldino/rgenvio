import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notificationButton';
import './style.css';


function SalesCards() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    return (
        <div className="card">
            <h2 className="sales-title">Envio de SMS</h2>
            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date) }
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date) }
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
                        <tr>
                            <td className="show992">#1</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#2</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#3</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCards;
