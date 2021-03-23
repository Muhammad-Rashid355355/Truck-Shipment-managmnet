export interface OrderInterface {
    created: string;
    external_id?: string | number;
    updated: string;
    remark?: string;
    data: Data;
    completed_date?: Date;
    completed: boolean;
    accepted: boolean;
    accepted_date?: Date;
}

export interface Data {
    order_summary: Ordersummary;
    previous_owner: Previousowner;
    owner: Owner;
    owner_2: Owner2;
    Vehicle: Vehicle;
    finance: Finance;
    lien: Lien;
    fees: Fees;
}

export interface Fees {
    taxable_total: string;
    tax_rate: string;
    gross_tax_payable: string;
    discount: string;
    net_tax_payable: string;
}

export interface Lien {
    Favorites: string;
    e_lien_id: string;
    name: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
}

export interface Finance {
    dealer_permit_num: string;
    vendor_num: string;
    purchase_date: string;
    sales_price: string;
    trade_in_allowance: string;
    issuance_county: string;
    tax_exemption: string;
    tax_jursidiction: string;
    tax_status: string;
    residence_state: string;
}

export interface Vehicle {
    vin: string;
    year: string;
    make: string;
    model: string;
    body: string;
    vondition: string;
    brands: string;
    odemeter_mileage: string;
    odemeter_status: string;
    dealer_id_stock_num: string;
}

export interface Owner2 {
    type: string;
    company: string;
    ssn: string;
    title: string;
    first: string;
    middle: string;
    lst: string;
    suffix: string;
    minor?: boolean;
}

export interface Owner extends Owner2 { // remove duplicates
    date_of_birth: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
    county: string;
    wros: boolean;
    tod_beneficiaries: boolean;
    email: string;
    dealer_customer_num: string;
}

export interface Previousowner extends Owner2 { // remove duplicates
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: string;
    county: string;
}

export interface Ordersummary {
    customer: string;
    vin: string;
    purchase_type: string;
}
