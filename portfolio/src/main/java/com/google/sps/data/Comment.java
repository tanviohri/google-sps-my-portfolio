package com.google.sps.data;

public final class Comment {

  private final String name;
  private final String commentText;
  private final long timestamp;

  public Comment(String name, String commentText, long timestamp) {
    this.name = name;
    this.commentText = commentText;
    this.timestamp = timestamp;
  }
}