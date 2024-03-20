package com.eiadss.store.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "bought")
public class Bought {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "orderId")
    private Long orderId;

    @Column(name = "productId")
    private Long productId;

    public Bought() {
    }

    public Bought(Long id, Long orderId, Long productId) {
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
    }

    public Bought(Long orderId, Long productId) {
        this.orderId = orderId;
        this.productId = productId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Bought bought)) return false;
        return Objects.equals(getId(), bought.getId()) && Objects.equals(getOrderId(), bought.getOrderId()) && Objects.equals(getProductId(), bought.getProductId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getOrderId(), getProductId());
    }

    @Override
    public String toString() {
        return "Bought{" +
                "id=" + id +
                ", orderId=" + orderId +
                ", productId=" + productId +
                '}';
    }
}
