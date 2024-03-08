import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import "./search.css";
import { Link } from "react-router-dom";

export const AutoCompleteSearch = () => {
    const [query, setQuery] = useState('');
    const [packages, setPackages] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const searchRef = useRef(null);

    const fetchData = useDebounce(
        (searchQuery) => {
            if (searchQuery) {
                fetch(`https://registry.npmjs.org/-/v1/search?text=${searchQuery}`)
                    .then(res => res.json())
                    .then((data) => setPackages(data.objects.map((item) => item.package.name)))
                    .catch((err) => console.log("Error fetching data:", err));
            }
        }, 500
    );

    const handleClickInside = () => {
        setShowResult(true);
    };

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShowResult(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        fetchData(query);
        return () => {
            fetchData.cancel();
        };
    }, [query]);

    useEffect(() => {
        setShowResult(packages.length > 0);
    }, [packages]);

    useEffect(() => {
        if (!query) setShowResult(false);
    }, [query]);

    return (
        <>
            <div className='d-flex align-items-center' ref={searchRef}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    className='form-control'
                    id='searchForm'
                    type='text'
                    placeholder='Search'
                    onClick={handleClickInside}
                />
                <button
                    className='btn btn-outline-success'
                    id='searchFormBtn'
                    type='submit'
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {packages.length > 0 && showResult && (
                <div className="position-absolute p-1" style={{ width: '400px' }}>
                    <div className="card">
                        <div className="card-header text-white" style={{ backgroundColor: '#000' }}>Search Results</div>
                        <ul className="list-group list-group-flush">
                            {packages.map((item, index) => (
                                <li key={index} className="list-group-item" style={{ textAlign: 'left' }}>
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <div className="hover-effect d-flex justify-content-between align-items-center p-2">
                                            <p className="mb-0">
                                                {item}
                                            </p>
                                            <p className="mb-0 font-weight-bold">$12</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
