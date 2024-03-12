package com.eiadss.store.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "picture")
    private String picture;
    @Column(name = "typeId")
    private int typeId;
    @Column(name = "price")
    private float price;
    @Column(name = "gender")
    private int gender;

    public Product() {
    }

    public Product(Long id, String name, String description, int typeId, float price, int gender) {
        this.id = id;
        this.name = name;
        this.picture = description;
        this.typeId = typeId;
        this.price = price;
        this.gender = gender;
    }

    public Product(String name, String description, int typeId, float price, int gender) {
        this.name = name;
        this.picture = description;
        this.typeId = typeId;
        this.price = price;
        this.gender = gender;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", picture='" + picture + '\'' +
                ", typeId=" + typeId +
                ", price=" + price +
                ", gender=" + gender +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product product)) return false;
        return getTypeId() == product.getTypeId() && Float.compare(product.getPrice(), getPrice()) == 0 && getGender() == product.getGender() && Objects.equals(getId(), product.getId()) && Objects.equals(getName(), product.getName()) && Objects.equals(getPicture(), product.getPicture());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getPicture(), getTypeId(), getPrice(), getGender());
    }

}
