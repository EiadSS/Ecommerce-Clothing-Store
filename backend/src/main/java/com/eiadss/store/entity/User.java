package com.eiadss.store.entity;


import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "postalCode")
    private String postalCode;
    @Column(name = "userName")
    private String userName;
    @Temporal(TemporalType.DATE)
    @Column(name = "dateOfBirth")
    private Date dateOfBirth;
    @Column(name = "number")
    private String number;
    @Column(name = "gender")
    private String gender;

    @Column(name = "password")
    private String password;

    public User() {
    }

    public User(String firstName, String lastName, String email, String address, String postalCode, String userName, Date dateOfBirth, String number, String gender, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.postalCode = postalCode;
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.number = number;
        this.gender = gender;
        this.password = password;
    }

    public User(Long id, String firstName, String lastName, String email, String address, String postalCode, String userName, Date dateOfBirth, String number, String gender, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.postalCode = postalCode;
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.number = number;
        this.gender = gender;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return getNumber() == user.getNumber() && Objects.equals(getId(), user.getId()) && Objects.equals(getFirstName(), user.getFirstName()) && Objects.equals(getLastName(), user.getLastName()) && Objects.equals(getEmail(), user.getEmail()) && Objects.equals(getAddress(), user.getAddress()) && Objects.equals(getPostalCode(), user.getPostalCode()) && Objects.equals(getUserName(), user.getUserName()) && Objects.equals(getDateOfBirth(), user.getDateOfBirth()) && Objects.equals(getGender(), user.getGender()) && Objects.equals(getPassword(), user.getPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getEmail(), getAddress(), getPostalCode(), getUserName(), getDateOfBirth(), getNumber(), getGender(), getPassword());
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", userName='" + userName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", number=" + number +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
