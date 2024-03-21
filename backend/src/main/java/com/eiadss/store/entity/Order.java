package com.eiadss.store.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "userId")
    private int userId;
    @Temporal(TemporalType.DATE)
    @Column(name = "date")
    private Date date;
    @Column(name = "methodOfPayment")
    private int methodOfPayment;
    @Column(name = "shippingAddress")
    private String shippingAddress;
    @Column(name = "billingAddress")
    private String billingAddress;

    public Order() {

    }

    public Order(Long id, int userId, Date date, int methodOfPayment, String shippingAddress, String billingAddress) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.methodOfPayment = methodOfPayment;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
    }

    public Order(int userId, Date date, int methodOfPayment, String shippingAddress, String billingAddress) {
        this.userId = userId;
        this.date = date;
        this.methodOfPayment = methodOfPayment;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMethodOfPayment() {
        return methodOfPayment;
    }

    public void setMethodOfPayment(int methodOfPayment) {
        this.methodOfPayment = methodOfPayment;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order order)) return false;
        return getUserId() == order.getUserId() && getMethodOfPayment() == order.getMethodOfPayment() && Objects.equals(getId(), order.getId()) && Objects.equals(getDate(), order.getDate()) && Objects.equals(getShippingAddress(), order.getShippingAddress()) && Objects.equals(getBillingAddress(), order.getBillingAddress());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserId(), getDate(), getMethodOfPayment(), getShippingAddress(), getBillingAddress());
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", userId=" + userId +
                ", date=" + date +
                ", methodOfPayment=" + methodOfPayment +
                ", shippingAddress='" + shippingAddress + '\'' +
                ", billingAddress='" + billingAddress + '\'' +
                '}';
    }
}
