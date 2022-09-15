package com.openData.dao.entity;


import java.util.Objects;

/**
 * @Auther ChenX
 * @Date 2020.8.7
 **/
public class EchartsNode {
  private String id;
  private String name;
  private String label;
  private String category;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public EchartsNode(){}

	public EchartsNode(String id, String name, String label, String category) {
		this.id = id;
		this.name = name;
		this.label = label;
		this.category = category;
	}

	@Override
	public String toString() {
		return "EchartsNode{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				", label='" + label + '\'' +
				", category='" + category + '\'' +
				'}';
	}
}
